
import { computed } from 'vue'

export default function getComputed(props) {
  const relativeStrokeWidth = computed(() => {
    return (props.strokeWidth / props.width * 100).toFixed(1);
  })
  const radius = computed(() => {
    if (props.type === 'circle' || props.type === 'dashboard') {
      return parseInt(50 - parseFloat(relativeStrokeWidth.value) / 2, 10);
    } else {
      return 0;
    }
  })
  const trackPath = computed(() => {
    const _radius = radius.value;
    const isDashboard = props.type === 'dashboard';
    return `
      M 50 50
      m 0 ${isDashboard ? '' : '-'}${_radius}
      a ${_radius} ${_radius} 0 1 1 0 ${isDashboard ? '-' : ''}${_radius * 2}
      a ${_radius} ${_radius} 0 1 1 0 ${isDashboard ? '' : '-'}${_radius * 2}
      `;
  })
  const perimeter = computed(() => {
    return 2 * Math.PI * radius.value;
  })
  const rate = computed(() => {
    return props.type === 'dashboard' ? 0.75 : 1;
  })
  const strokeDashoffset = computed(() => {
    const offset = -1 * perimeter.value * (1 - rate.value) / 2;
    return `${offset}px`;
  })
  const trailPathStyle = computed(() => {
    return {
      strokeDasharray: `${(perimeter.value * rate.value)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    };
  })
  const circlePathStyle = computed(() => {
    let percentage = props.percentage;
    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;
    return {
      strokeDasharray: `${perimeter.value * rate.value * (percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
    };
  })
  return {
    trackPath,
    trailPathStyle,
    circlePathStyle,
    relativeStrokeWidth
  }
}
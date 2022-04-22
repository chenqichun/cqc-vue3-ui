import SignBoard from './sign-board.jsx';
import '../../theme-chalk/sign-board.scss';

SignBoard.install = app => app.component(SignBoard.name, SignBoard)

export default SignBoard
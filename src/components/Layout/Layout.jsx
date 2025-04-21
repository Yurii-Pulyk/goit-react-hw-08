import AppBAr from '../AppBar/AppBar';
import css from './Layout.modal.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBAr />
      {children}
    </div>
  );
}

import React, { Component } from "react";
import Link from '../Link/Link';
import styles from './Navigation.css';
import utilStyles from '../../Utils.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { isActive: false };

    this.handleClick = this.handleClick.bind(this);
  }

  links() {
    const links = [
      { id: 1, title: 'About', url: '/about'},
      { id: 2, title: 'Team', url: '/team'},
      { id: 3, title: 'Projects', url: '/projects'},
      { id: 4, title: 'Contact', url: '/contact'}
    ];

    return links;
  }

  handleClick(event) {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <div className={styles.nav}>
        <header className={styles.header}>
          <button
            className={
              utilStyles.hamburger + ' ' + utilStyles['hamburger--3dx'] + ' ' +
              (this.state.isActive ? utilStyles['is-active'] : '')
            }
            type="button"
            onClick={this.handleClick}
          >
            <span className={utilStyles['hamburger-box']}>
              <span className={utilStyles['hamburger-inner']} />
            </span>
          </button>
        </header>
        <ul className={styles.menu + ' ' + (this.state.isActive ? styles.active : '')}>
        {
          this.links().map((link) => {
            return (
              <li key={link.id}>
                <Link classes="link" url={link.url} title={link.title} />
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Navigation;

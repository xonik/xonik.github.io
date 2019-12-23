import React from 'react';
import './Footer.scss';
import { paths } from '../router/routes';
import { Link } from 'react-router-dom';

export default () => {
  return <footer className="footer">
    <p>
      Xonik Devices is Joakim Tysseng of Haslum, Norway.
    </p>
    <p>
      Use the <Link to={paths.contactMe}>contact form</Link> if you want to get in touch with me,
    </p>
  </footer>
}

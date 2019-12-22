import React from 'react';
import './Footer.scss';
import { paths } from '../router/routes';

export default () => {
  return <footer className="footer">
    <p>
      Xonik Devices is Joakim Tysseng of Haslum, Norway.
    </p>
    <p>
      Use the <a href={paths.contactMe}>contact form</a> if you want to get in touch with me,
    </p>
  </footer>
}

'use client'

import React from 'react';
import './style.css';
import { contactPhones, footerLinks } from '@/utils/constants';
import Link from 'next/link';
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer role="contentinfo">
      <motion.ul
        initial={{ opacity: 0, x: -10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.2 },
        }}
        transition={{ delayChildren: 0.3 }}
        className="footer"
        viewport={{ once: true }}
      >
        <motion.li
          key={`1`}
          initial={{ opacity: 0, x: -10 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 1 / 20, duration: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <address className="address-section font-sizes">
            <span>375 Beale Street, Suite 600</span>
            <span>San Francisco, CA 94105</span>
          </address>
        </motion.li>
        <motion.li
          key={`2`}
          initial={{ opacity: 0, x: -10 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 2 / 20, duration: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <address
            className="footer-contact-info font-sizes"
            aria-label="Contact Information"
          >
            <div className="footer-contact-info-wrapper">
              <div className="contact-phone-numbers">
                {contactPhones.map((phone) => (
                  <div className="contact-phone-wrapper" key={phone.id}>
                    <Link className="phone-number" href={`tel:+1${phone.number}`}>
                      {phone.title}
                    </Link>
                    <span className="bar">|</span>
                  </div>
                ))}
              </div>

              <div className="footer-links">
                {footerLinks.map((link) => (
                  <div className="footer-link-wrapper" key={link.id}>
                    <Link className="footer-link" href={link.to}>
                      {link.title}
                    </Link>
                    <span className="dot">•</span>
                  </div>
                ))}
              </div>
            </div>
          </address>
        </motion.li>
        <motion.li
          key={`3`}
          initial={{ opacity: 0, x: -10 }}
          role="menuitem"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 3 / 20, duration: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <img
            className="footer-logo"
            alt="Baaqmd Footer Logo"
            src="/img/baaqmd-logo-fullcolor-black-2.png"
            role="img"
            aria-label="Baaqmd Footer Logo"
          />
        </motion.li>
      </motion.ul>
    </footer>
  );
};

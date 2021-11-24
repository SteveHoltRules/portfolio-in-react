import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="aboutme">
          <img
            src={require(`../../assets/images/DSCF5488 (2).jpg`)}
            alt={removeHyphensAndCapitalize('matt luna')}
          />
        </div>
        <p>
          I am experienced financial analyst and business consultant with a
          demonstrated history of working in the financial services industry. I
          am skilled in budgeting, business development, asset management,
          valuation, and due diligence. I have a Master of Business
          Administration (MBA) focused in Finance from The University of Texas
          at Dallas and I am working on a certificate as a full stack developer.
          I live in Allen Texas with my wife and four kids.
        </p>
      </div>
    </section>
  );
}

export default About;

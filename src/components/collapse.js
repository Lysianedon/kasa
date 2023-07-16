import '../styles/collapse.scss';
import { useState } from 'react';

export default function Collapse({ header, content, size }) {
  const [isCollapseOpen, setCollapse] = useState(false);

  let contentCollapse;
  if (Array.isArray(content)) {
    const contentList = content.map((c, index) => <li key={index}>{c}</li>);
    contentCollapse = (
      <div className={`content ${isCollapseOpen ? '' : 'closed'}`}>
        <ul>{isCollapseOpen && contentList}</ul>
      </div>
    );
  } else {
    contentCollapse = (
      <div className={`content ${isCollapseOpen ? '' : 'closed'}`}>
        {isCollapseOpen && content}
      </div>
    );
  }

  return (
    <div id="collapse" className={size}>
      <div className="header" onClick={() => setCollapse(!isCollapseOpen)}>
        <span>{header}</span>
        <div className={`chevron ${isCollapseOpen ? 'chevron-up' : 'chevron-down'}`}></div>
      </div>
      <div className={`content ${isCollapseOpen ? '' : 'closed'}`}>{contentCollapse}</div>
    </div>
  );
}

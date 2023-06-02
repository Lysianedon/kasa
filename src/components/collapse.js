import '../styles/collapse.scss';
import { useState } from 'react';
export default function Collapse({data}) {
    const [isCollapseOpen, setCollapse] = useState(false);
    return (
      <>
        <div id="collapse">
            <div className="header" onClick={() => setCollapse(!isCollapseOpen)}> <span>{data.header}</span> 
            <div className={`chevron ${isCollapseOpen ? 'chevron-up' : 'chevron-down'}`}></div>
            </div>
            <div className={`content ${isCollapseOpen ? "" : "closed"}`}> {isCollapseOpen && data.content} </div>
        </div>
      </>
    );
  }
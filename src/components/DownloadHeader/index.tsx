import React from 'react';
import { NodeReleaseLTSNPMVersion } from '../../types';
import './DownloadHeader.scss';

interface Props {
  release?: NodeReleaseLTSNPMVersion;
}

const DownloadHeader = ({ release }: Props): JSX.Element => {
  const nodev = release?.version;
  const npmv = release?.npm;
  const lts = release?.lts;

  return (
    <>
      <div className="download-page__navigation">
        <div>
          HOME /
          <span className="download-page__navigation--active"> downloads</span>
        </div>
        <div>
          {lts ? 'LATEST LTS' : 'CURRENT'} VERSION {nodev}
        </div>
      </div>
      <div className="download-page__navigation">
        <div className="download-page__navigation--title">Downloads</div>
        <div className="download-page__navigation--npm">
          (includes npm {npmv})
        </div>
      </div>
    </>
  );
};

export default DownloadHeader;

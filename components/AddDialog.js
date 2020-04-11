import { withRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/addDialog.module.css";
const driveList = [
  { id: 1, driveName: "OneDrive", authUrl: "https://www.baidu.com" },
  { id: 2, driveName: "Google Drive", authUrl: "https://www.baidu.com" },
  { id: 3, driveName: "Dropbox", authUrl: "https://www.baidu.com" },
  { id: 4, driveName: "Yandex Disk", authUrl: "https://www.baidu.com" },
];
const AddDialog = () => {
  const renderDriveList = () => {
    return driveList.map((item) => {
      return (
        <li className={styles.driveName} key={item.id}>
          <a
            href="http://www.baidu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.driveName}
          </a>
        </li>
      );
    });
  };
  return (
    <div className={styles.addDialog}>
      <ul className={styles.driveList}>
        <li className={styles.driveListTitle}>Add New Drive</li>
        {renderDriveList()}
      </ul>
      <div className={styles.addLine}></div>
      <div className={styles.addPlaylist}>Add New Playlist</div>
    </div>
  );
};

export default withRouter(AddDialog);

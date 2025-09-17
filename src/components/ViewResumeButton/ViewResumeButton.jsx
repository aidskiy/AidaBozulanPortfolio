import React, { useState } from 'react';
import styles from './ViewResumeButton.module.css';

export const ViewResumeButton = ({ 
  buttonText = "View Resume", 
  resumePath = "/Aidabozulan-Fullstack.pdf",
  downloadFileName = "Aida_Bozulan_Resume.pdf",
  className = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button className={`${styles.viewButton} ${className}`} onClick={openModal}>
        {buttonText}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Resume</h3>
              <div className={styles.modalActions}>
                <button className={styles.downloadButton} onClick={handleDownload}>
                  Download PDF
                </button>
                <button className={styles.closeButton} onClick={closeModal}>
                  ×
                </button>
              </div>
            </div>
            <div className={styles.pdfContainer}>
              <iframe
                src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
                className={styles.pdfViewer}
                title="Resume PDF"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

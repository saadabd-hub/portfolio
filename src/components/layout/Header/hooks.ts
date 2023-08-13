import { useCallback } from 'react';

const useCustomHooks = () => {

  const onClickDownloadPdf = useCallback(() => {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file.
    const pdfUrl = 'path/to/your/pdf/file.pdf';
    const link = document.createElement('a');

    link.href = pdfUrl;
    link.target = '_blank'; // Open in a new tab/window, if needed.
    link.download = 'your_pdf_filename.pdf'; // Change 'your_pdf_filename' to the desired name for the downloaded file.

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return {
    methods: {
      onClickDownloadPdf,
      scrollToSection
    }
  }
}

export default useCustomHooks;
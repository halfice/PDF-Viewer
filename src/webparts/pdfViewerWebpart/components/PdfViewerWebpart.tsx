import * as React from 'react';
import styles from './PdfViewerWebpart.module.scss';
import { IPdfViewerWebpartProps } from './IPdfViewerWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Document, Page } from 'react-pdf';

export default class PdfViewerWebpart extends React.Component<IPdfViewerWebpartProps, {}> {
  state = {
    numPages: null,
    pageNumber: 1,
  }


  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  public render(): React.ReactElement<IPdfViewerWebpartProps> {
    return (
      <div className={ styles.pdfViewerWebpart }>
        <div className={ styles.container }>
            <Document
          file="https://arabtec.sharepoint.com/sites/dev/MyDocs/EmployeeHanbook2013ATC.PDF"
          onLoadSuccess={this.onDocumentLoad}        >
          <Page pageNumber={1} />
            </Document>
            <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
        </div>
      </div>
    );
  }
}

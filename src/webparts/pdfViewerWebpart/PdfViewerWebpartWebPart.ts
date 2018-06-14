import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PdfViewerWebpartWebPartStrings';
import PdfViewerWebpart from './components/PdfViewerWebpart';
import { IPdfViewerWebpartProps } from './components/IPdfViewerWebpartProps';

export interface IPdfViewerWebpartWebPartProps {
  description: string;
}

export default class PdfViewerWebpartWebPart extends BaseClientSideWebPart<IPdfViewerWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPdfViewerWebpartProps > = React.createElement(
      PdfViewerWebpart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

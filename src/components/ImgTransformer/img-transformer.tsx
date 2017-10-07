import React from 'react';
import { Grid } from 'semantic-ui-react';

import { DROPPED_FILE } from '../../constants';
import CanvasFile from '../CanvasFile';
import CanvasStream from '../CanvasStream';
import HeaderBlock from '../HeaderBlock';
import FlightDeck from '../FlightDeck';

import './style.css';

export interface Props {}

export interface State {
  /** File from the DropButton component */
  droppedFile: string;
  /** File from the DropButton component */
  streamedFile: string;
}



class ImgTransformer extends React.Component<Props, State>
{
  constructor(props: any) {
    super(props);
    this.state = {
      droppedFile: undefined,
      streamedFile: undefined,
    };
    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  componentWillMount() {
    // change this once we have canvas working
    localStorage.clear();
  }

  setImage(reader: FileReader) {
    
    localStorage.setItem(DROPPED_FILE, reader.result);
    console.log('reader', reader);
  }

  handleImageSelect(accepted: any) {
    const reader  = new FileReader();
    console.log(accepted[0]);
    if (accepted && accepted[0]) {
      reader.onload = () => {
        
        this.setImage(reader);
      };
      reader.readAsDataURL(accepted[0]);
      console.log('reader', reader);
    }
    this.setState({ droppedFile: accepted[0].name, streamedFile: accepted[0].name });
  }

  render() {
    return (
      <div>
        <HeaderBlock title={this.state.droppedFile } />
        <div className="it-main">
          <Grid stackable columns={2} >
            <Grid.Column>
              <CanvasFile droppedFile={this.state.droppedFile} />
            </Grid.Column>
            <Grid.Column>
              <CanvasStream streamedFile={this.state.streamedFile} />
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <FlightDeck dropped={this.handleImageSelect} />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ImgTransformer;

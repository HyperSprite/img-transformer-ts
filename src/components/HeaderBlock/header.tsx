import React from 'react';
import { Header } from 'semantic-ui-react';

// TODO set the header up with two divs so when responsive,
//   moves the title on to the next line

export interface Props {
  /** Optional title will show after App title  */
  title: string | undefined;
}

const defaultProps  = {
  title: '',
};

const HeaderBlock: React.StatelessComponent<Props | {}> = ({
  title,
}: Props) => (

  <Header as="h1" block >
    {`Img Transformer ${title && ' - ' + title}`}
  </Header>
);

HeaderBlock.defaultProps = defaultProps;

export default HeaderBlock;
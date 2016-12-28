import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  RadioButtonGroup,
  TextField,
} from 'redux-form-material-ui';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';
import { Col, Row, Heading } from 'components/index';
import { BoldrEditor } from 'boldr-editor';

import 'boldr-editor/dist/boldreditor.css';

const styled = require('styled-components').default;

type Props = {
  handleSubmit?: Function,
  editing?: boolean,
  reset?: Function,
  isEditing?: boolean,
  submitting?: boolean,
  fields?: Object,
  pristine?: boolean,
  input?: Object,
  label?: string,
};

class PostEditorForm extends Component {
  constructor(props: Props) {
    super();
    this.checkEditStatus = this.checkEditStatus.bind(this);
    this.state = {
      edit: false,
      open: false,
    };
  }

  componentDidMount() {
    this.checkEditStatus();
  }
  props: Props;
  checkEditStatus() {
    const EDITING = this.props.isEditing === true;
    if (EDITING) this.setState({ edit: true });
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  render() {
    const { handleSubmit } = this.props;
    /**
     * wraps the editor component for embedding into redux-form as an input component
     * @param  {object} input
     * @param  {string} label
     * @return {element} BoldrEditor
     */
    const renderEditor = ({ input, label }) => (
      <div>
        <BoldrEditor { ...input } label={ label } />
      </div>
    );
    const Wrapper = styled.div`
      margin: 0 auto;
      display: inherit;
      padding-top: 5em;
      width: 90%;
    `;
    const Footer = styled.div`
      margin: 0 auto;
      display: inherit;
      width: 90%;
      padding-top: 5em;
    `;
    return (
      <Row>
        <Col xs>
          <form onSubmit={ handleSubmit }>
            <Drawer width={ 350 } openSecondary open={ this.state.open } >
              <Wrapper>
                <Field
                  name="title"
                  type="text"
                  component={ TextField }
                  fullWidth
                  floatingLabelText="Post Title"
                />
              {
                !this.state.edit ?
                  <Field name="tags" type="text"
                    hintText="Separate using commas"
                    component={ TextField }
                    fullWidth
                    floatingLabelText="Tags"
                  /> :
                null
              }

              <Field name="feature_image" type="text"
                hintText="URL for your image"
                component={ TextField }
                fullWidth
                floatingLabelText="Feature Image"
              />

              <Field name="excerpt"
                type="text"
                component={ TextField }
                floatingLabelText="Excerpt"
                hintText="A brief overview or area from your post to highlight"
                multiLine
                fullWidth
                rows={ 3 }
              />
              <Footer>
                <Row>
                  <Col xs={ 12 } md={ 6 }>
                    <Heading size={ 4 }>Post Status:</Heading>
                  </Col>
                  <Col xs={ 12 } md={ 6 }>
                    <Field name="status" component={ RadioButtonGroup }>
                     <RadioButton value="draft" label="Draft" />
                     <RadioButton value="published" label="Published" />
                     <RadioButton value="archived" label="Archived" />
                   </Field>
                  </Col>
                </Row>
                <RaisedButton primary type="submit" label="Save Post" />
              </Footer>
            </Wrapper>
          </Drawer>
          <Field name="content" component={ renderEditor } />
          <Row>
            <RaisedButton
              secondary
              label="Continue"
              onTouchTap={ this.handleToggle }
            />
          </Row>
        </form>
        </Col>
      </Row>
    );
  }
}
export default reduxForm({
  form: 'postEditorForm',
})(PostEditorForm);
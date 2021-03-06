/* eslint-disable import/no-mutable-exports */
import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm, formValueSelector, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import Subheader from 'react-md/lib/Subheaders';
import SelectField from 'react-md/lib/SelectFields';
import Button from 'react-md/lib/Buttons';
import InputField from '../../../../../components/Form/InputField';

type Props = {
  handleSubmit?: Function,
  reset?: Function,
  submitting?: boolean,
  fields: ?Array<Object>,
  pristine?: boolean,
  input: Object,
  hasDropdownValue: boolean,
};

const style = {
  margin: 12,
};

const DetailsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const DetailsListItem = styled.li`
  padding-left: 0;
`;

const renderMenuDetails = (props: Props) => (
  <DetailsList>
    <DetailsListItem>
      <Button secondary flat onClick={ () => props.fields.push({}) } label="Add Menu Detail" />
    </DetailsListItem>
    {props.fields.map(items => (
      <DetailsListItem key={ items.id }>
        <Button style={ { float: 'right' } } icon onClick={ () => fields.remove(index) }>close</Button>
        <span>Menu Detail #{index + 1}</span>
        <Field id="name" name={ `${items}.name` } type="text" component={ InputField } label="Name" />
        <Field id="href" name={ `${items}.href` } type="text" component={ InputField } label="URL" />
        <Field id="icon" name={ `${items}.icon` } type="text" component={ InputField } label="Icon" />
      </DetailsListItem>
    ))}
  </DetailsList>
);
let NavigationForm = (props: Props) => {
  // eslint-disable-line
  const { handleSubmit, reset, hasDropdownValue } = props;
  const opts = [
    {
      itemValue: true,
      label: 'Yes',
    },
    {
      itemValue: false,
      label: 'No',
    },
  ];
  const renderDropSelector = ({ input }) => (
    <div>
      <SelectField
        { ...input }
        id="drop"
        label="Has Dropdown"
        placeholder="Select a role"
        menuItems={ opts }
        itemLabel="label"
        itemValue="has_dropdown.itemValue"
        className="md-cell"
      />
    </div>
  );
  return (
    <form className="form__navigation" onSubmit={ handleSubmit }>
      <Field id="nav-name" name="name" component={ InputField } type="text" label="Name" />
      <Field id="nav-position" name="order" component={ InputField } type="text" label="Display Order" />
      <Field id="nav-link" name="href" component={ InputField } type="text" label="Link" />
      <Field id="nav-icon" name="icon" component={ InputField } type="text" label="Icon" />
      <label htmlFor="menuType">What type of menu item?</label><br />
      <label htmlFor="single" style={ { marginRight: '10px' } }>
        <Field id="draft" name="has_dropdown" component="input" type="radio" value="false" /> Single Link
      </label>
      <label htmlFor="dropdown">
        <Field id="published" name="has_dropdown" component="input" type="radio" value="true" /> Dropdown Menu
      </label>
      {hasDropdownValue === 'true' &&
        <div>
          <Field id="nav-key" name="key" component={ InputField } type="text" label="Key" />
          <FieldArray id="nav-items" name="items" component={ renderMenuDetails } />
        </div>}

      <div className="form__footer">
        <Button type="submit" label="Save" style={ style } raised primary />
        <Button label="Reset" onClick={ reset } style={ style } raised secondary />
      </div>
    </form>
  );
};
NavigationForm = reduxForm({
  form: 'navigationForm',
})(NavigationForm);

const selector = formValueSelector('navigationForm');
NavigationForm = connect(state => {
  const hasDropdownValue = selector(state, 'has_dropdown');
  return {
    hasDropdownValue,
  };
})(NavigationForm);

export default NavigationForm;

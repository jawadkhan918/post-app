import React, {forwardRef} from 'react';
import {IS_IPHONE} from '../../constants';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

export const KeyboardAvoidingScrollView = forwardRef((props, ref) => {
  const {children} = props;
  return (
    <KeyboardAvoidingView
      behavior={IS_IPHONE ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

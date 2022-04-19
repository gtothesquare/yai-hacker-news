import React from 'react';
import { Box } from '@chakra-ui/react';

function ItemText({ text }: { text?: string }) {
  if (!text) {
    return null;
  }
  return (
    <Box
      width={'100%'}
      wordBreak={'break-word'}
      fontSize={['xs', 'sm']}
      sx={{
        p: {
          marginBlockStart: '1rem',
          marginBlockEnd: '1rem',
          wordBreak: 'break-word',
        },
        'a, pre': {
          whiteSpace: 'pre-wrap' /* css-3 */,
          wordWrap: 'break-word' /* Internet Explorer 5.5+ */,
        },
        a: {
          color: 'rgb(51,102,187)',
          textDecoration: 'underline',
        },
      }}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}

export { ItemText };

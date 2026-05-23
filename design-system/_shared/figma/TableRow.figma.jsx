import figma from '@figma/code-connect'

// Table Row component set — node 40:56
figma.connect(
  'https://www.figma.com/design/E5Y5kOJd8KhUlpC4ymmWW0?node-id=40-56',
  {
    props: {
      type: figma.enum('Type', {
        Header: 'header',
        Data:   'data',
      }),
    },
    example: ({ type }) =>
      type === 'header' ? (
        <thead>
          <tr>
            <th>
              <div className="th-inner">Column</div>
            </th>
          </tr>
        </thead>
      ) : (
        <tbody>
          <tr>
            <td>Cell value</td>
          </tr>
        </tbody>
      ),
  }
)

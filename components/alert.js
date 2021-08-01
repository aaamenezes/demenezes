import React from 'react'
import cn from 'classnames'
import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          {preview ? (
            <>
              This page is a preview.
              {' '}
              <a
                href='/api/exit-preview'
                // eslint-disable-next-line max-len
                className='underline hover:text-cyan duration-200 transition-colors'
              >
                Click here
              </a>
              {' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is
              {' '}
              <a
                // eslint-disable-next-line max-len
                href={`https://github.com/vercel/next.js/tree/canary/examples/${ EXAMPLE_PATH }`}
                // eslint-disable-next-line max-len
                className='underline hover:text-success duration-200 transition-colors'
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

/* eslint-disable no-undef */
import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../pages/Home'
import { store } from '../store'
import { addSearchTerm } from '../store/searchSlice'
import { ReduxProvider } from './utils/test-utils'
import tracks from './mockData/tracks.json'
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom/extend-expect'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(tracks),
  })
)

afterEach(() => {
  store.dispatch(addSearchTerm(''))
})

describe('Jest Snapshot Home', () => {
  it('Matches DOM Snapshot on empty', () => {
    const domTree = renderer
      .create(
        <ReduxProvider reduxStore={store}>
          <Home />
        </ReduxProvider>
      )
      .toJSON()
    expect(domTree).toMatchSnapshot()
  })

  it('Matches DOM Snapshot on search', async () => {
    const domTree = renderer.create(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    )

    act(() => {
      store.dispatch(addSearchTerm('test'))
    })

    await domTree.update(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    )

    expect(domTree.toJSON()).toMatchSnapshot()
  })

  it('Test search artist input empty', async () => {
    render(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    )

    expect(
      screen.getByText(
        'Type in the search bar to search your favorite artists...'
      )
    ).toBeInTheDocument()
  })

  it('Test search artist with "test" in input', async () => {
    store.dispatch(addSearchTerm('test'))

    render(
      <ReduxProvider reduxStore={store}>
        <Home />
      </ReduxProvider>
    )

    await waitFor(() =>
      expect(screen.getByText('Search results for :')).toBeInTheDocument()
    )
  })
})

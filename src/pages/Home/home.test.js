import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "."
import { productsAction } from "../../actions/products.action"
import { productsMock } from "../../mocks/products.mock"

describe('Teste da tela Home', () => {

  it('Deve renderizar a quantidade correta de itens', async () => {

    jest.spyOn(productsAction, 'getProducts')
      .mockResolvedValue({
        data: productsMock,
        status: 200,
        statusText: "OK"
      })


    render(<Home />, {wrapper: BrowserRouter})

    await waitFor(() => {
      expect(
        // eslint-disable-next-line testing-library/no-node-access
        screen.getByTestId('products-list').childElementCount
      )
        .toEqual(3)
    })

  })
})
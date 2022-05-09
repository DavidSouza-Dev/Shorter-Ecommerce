import { render } from "@testing-library/react"

import Main from "."

describe("<Main/>", () => {
  it("should render the heading", () => {
    const { container, getByRole } = render(
      <Main>
        <h1>teste jest</h1>
      </Main>
    )
    expect(container).toBeInTheDocument()
    const mainChild = getByRole("main").childNodes
    expect(mainChild).toHaveLength(1)
  })
})

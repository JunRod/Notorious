import { Body } from "@components/Body"
import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"

const layout = ({children}) => {
  return (
    <html lang="en">
      <Body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </Body>
    </html>
  )
}

export default layout

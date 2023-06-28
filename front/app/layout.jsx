import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default layout

//a
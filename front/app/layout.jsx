import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"
import Documentation from "@components/documentation";

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
            <Documentation/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default layout

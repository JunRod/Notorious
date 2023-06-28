import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"
import landingStyles from "@styles/landingStyles.module.css";

const layout = ({children}) => {
  return (
    <html lang="en">
      <body className={landingStyles.body}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default layout

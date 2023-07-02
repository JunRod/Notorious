import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"
import Documentation from "@components/documentation";
import ProviderPage from "@app/ProviderPage";

const layout = ({children}) => {
    return (
        <html lang="en">
          <body>
          <StyledComponentsRegistry>
              <ProviderPage>
                {children}
              </ProviderPage>
              <Documentation/>
          </StyledComponentsRegistry>
          </body>
        </html>
    )
}

export default layout

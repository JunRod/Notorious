import "@styles/globals.css"
import StyledComponentsRegistry from "@utils/registry"
import Documentation from "@components/documentation";
import ProviderPage from "@components/ProviderPage";
import ProviderNextAuth from "@components/ProviderNextAuth";


const layout = ({children}) => {
    return (
        <html lang="en">
        <body>
        <StyledComponentsRegistry>
            <ProviderNextAuth>
                <ProviderPage>
                    {children}
                </ProviderPage>
            </ProviderNextAuth>
            <Documentation/>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

export default layout

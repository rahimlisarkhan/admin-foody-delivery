import { ContentHeaderRow,ContentHeaderTitleArea, ContentHeaderTitle,ContentHeaderButtonsArea } from "./ContentHeader.styled"



export const ContentHeader = ({children,title}) => {

    return(
        <ContentHeaderRow>
            <ContentHeaderTitleArea>
                <ContentHeaderTitle>
                    {title}
                </ContentHeaderTitle>
            </ContentHeaderTitleArea>
            <ContentHeaderButtonsArea>
                <ContentHeaderTitle>
                    {children}
                </ContentHeaderTitle>
            </ContentHeaderButtonsArea>
        </ContentHeaderRow>
    )
} 
import {
    Document,
    PDFViewer,
    Page,
    Text,
    View,
} from "@react-pdf/renderer";
export default function Pdf() {
    return (<>
        <PDFViewer style={{ width: "80vw", height: "80vh" }}>
            <Document style={{ width: "80%", height: "80%" }}>
                <Page>
                    <View>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aperiam, vitae quidem consequuntur dolores ipsum voluptatem explicabo aliquid quam sunt perferendis facilis provident tenetur, fugit illum fuga doloribus placeat maxime.</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>

    </>)
}
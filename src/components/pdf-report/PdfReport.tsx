import { FC } from "react"
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import interMedium from "../../assets/fonts/Inter-Medium.ttf"
import interSemiBold from "../../assets/fonts/Inter-SemiBold.ttf"

const PdfReport: FC = () => {
  const reportString = localStorage.getItem('report') as string
  const reportInfo =JSON.parse(reportString);

  Font.register({family: 'Inter Medium', src: interMedium})
  Font.register({family: 'Inter SemiBold', src: interSemiBold})

  const styles = StyleSheet.create({
    pageWrapper: {
      width: '80vw',
      marginHorizontal: 'auto',
      paddingVertical: 35,
    },
    title: {
      marginBottom: 6,
      fontFamily: 'Inter SemiBold',
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.5,
      color: '#101012',
    },
    text: {
      fontFamily: 'Inter Medium',
      fontWeight: 500,
      fontSize: 11,
      lineHeight: 1.71,
      color: '#4B4C4E'
    },
    table: {
      marginBottom: '20vh',
      padding: 12,
      flexDirection: 'column',
      gap: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#e3e3e3',
    },
    tableRow: {
      height: 35,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.6,
      borderBottomStyle: 'solid',
      borderBottomColor: '#e7e7e9',
    },
    tableContent: {
      fontFamily: 'Inter Medium',
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.5,
      color: '#101012',
    },

  })

  return (
    <Document>
      <Page size={'A4'}>
        <View style={styles.pageWrapper}>
          <Text style={styles.title}>PDF report</Text>
          <Text style={[styles.text, {marginBottom: 20}]}>Your comparison report calculation based on provided information</Text>
          <View style={styles.table}>
            {reportInfo.map((it: Record<string,string>) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableContent}>{it.title}</Text>
                <Text style={styles.tableContent}>{it.value}</Text>
              </View>
            ))}
          </View>
          <Text style={[styles.text, {marginBottom: 5}]}>{'Mortgage Calculator ' + new Date().getFullYear()}</Text>
          <Text style={[styles.text, {marginBottom: 0}]} fixed render={({pageNumber, totalPages}) => `${pageNumber} of ${totalPages}`}/>
        </View>
      </Page>
    </Document>
  )
}

export default PdfReport
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Image, Font } from '@react-pdf/renderer';

const baseUrl = 'https://mercymsingh.github.io/';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: `${baseUrl}/fonts/Roboto-Regular.ttf` },
    { src: `${baseUrl}/fonts/Roboto-Bold.ttf`, fontWeight: 'bold' },
  ],
});

// --- Type Definitions for Props ---
interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: { name: string; details: string[] }[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface ResumeDocumentProps {
  data: {
    sortedExperiences: Experience[];
    skillCategories: SkillCategory[];
    education: Education[];
  };
}


// --- Stylesheet for the PDF ---
const styles = StyleSheet.create({
  page: { fontFamily: 'Roboto', fontSize: 9.5, lineHeight: 1.4, backgroundColor: '#FFFFFF', padding: '0.4in 0.5in' },
  header: { textAlign: 'center', marginBottom: 20 },
  badgeContainer: { flexDirection: 'row', justifyContent: 'center', gap: 2, flexWrap: 'wrap', marginBottom: 6 },
  badge: { width: 40, height: 40 },
  name: { fontSize: 24, fontFamily: 'Roboto', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 12, color: '#4A4A4A' },
  mainSection: { flexDirection: 'row' },
  leftColumn: { width: '33%', paddingRight: 15 },
  rightColumn: { width: '67%' },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 13, fontFamily: 'Roboto', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#D3D3D3', paddingBottom: 2, marginBottom: 8 },
  contactItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 3 },
  contactIcon: { width: 10, height: 10, marginRight: 6 },
  contactText: { color: '#0000FF', textDecoration: 'none' },
  skillCategoryTitle: { fontSize: 10, fontFamily: 'Roboto', fontWeight: 'bold', marginBottom: 2 },
  skillText: { color: '#333' },
  educationText: { fontSize: 9.5 },
  jobTitle: { fontSize: 11, fontFamily: 'Roboto', fontWeight: 'bold' },
  companyInfo: { fontSize: 9.5, color: '#555555', marginBottom: 5 },
  bulletPoint: { flexDirection: 'row', marginBottom: 3, paddingRight: 15 },
  bullet: { width: 10, fontSize: 10 },
  bulletText: { flex: 1 },
});


// --- The PDF Document Component ---
export const ResumeDocument = ({ data }: ResumeDocumentProps) => (
  <Document author="Mercy Mochary" title="Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>

      <View style={{ marginBottom: 4 }}>
          <Text style={styles.name}>MERCY MOCHARY</Text>
      </View>
      <View>
          <Text style={styles.subtitle}>AI-Driven Lead Information Developer</Text>
      </View>
    </View>

      <View style={styles.mainSection}>
        {/* LEFT COLUMN */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Details</Text>

            <View style={styles.contactItem}>
              <Image style={styles.contactIcon} src={`${baseUrl}/icons/mobile.png`} />
              <Text>+91-9050118760</Text>
            </View>
            <View style={styles.contactItem}>
              <Image style={styles.contactIcon} src={`${baseUrl}/icons/email.png`} />
              <Link style={styles.contactText} src="mailto:mercymochary4@gmail.com">mercymochary4@gmail.com</Link>
            </View>
            <View style={styles.contactItem}>
              <Image style={styles.contactIcon} src={`${baseUrl}/icons/linkedin.png`} />
              <Link style={styles.contactText} src="https://www.linkedin.com/in/mercymochary/">mercy-mochary</Link>
            </View>
            <View style={styles.contactItem}>
              <Image style={styles.contactIcon} src={`${baseUrl}/icons/portfolio.png`} />
              <Link style={styles.contactText} src="https://mercymsingh.github.io/">Github Portfolio</Link>
            </View>
          </View>

          <View style={styles.section}>
             <Text style={styles.sectionTitle}>Skills</Text>
             {data.skillCategories.map((cat, idx) => (
                <View key={idx} style={{ marginBottom: 6 }}>
                    <Text style={styles.skillCategoryTitle}>{cat.category}</Text>
                    <Text style={styles.skillText} hyphenationCallback={word => [word]}>{cat.skills.join(', ')}</Text>
                </View>
             ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, idx) => (
                <View key={idx}>
                    <Text style={styles.educationText}>{edu.degree}</Text>
                    <Text style={styles.educationText}>{edu.institution}</Text>
                    <Text style={styles.educationText}>{edu.period}</Text>
                </View>
            ))}
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text>11+ years of experience in creating and editing complex technical documents across IT domains, including Banking, Finance, and Business Automation. Skilled in AI-driven documentation, prompt engineering, and generative AI content workflows.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.sortedExperiences.map((job, idx) => (
              <View key={idx} style={{ marginBottom: 10 }}>
                <Text style={styles.jobTitle}>{job.role}</Text>
                <Text style={styles.companyInfo}>{job.company} | {job.location} | {job.period}</Text>
                {job.projects.flatMap(p => p.details).map((detail, i) => (
                   <View key={i} style={styles.bulletPoint}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletText}>{detail}</Text>
                   </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
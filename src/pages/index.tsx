import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button, Container, Content, FlexboxGrid } from 'rsuite'
import { Icon } from '@rsuite/icons'
import { BsCloudDownload, BsCheck2Circle } from 'react-icons/bs'

import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fedistar</title>
      </Head>
      <main>
        <Container className={inter.className}>
          <Content style={{ minHeight: '100vh' }} className={styles.content}>
            <div style={{ marginTop: '16vh' }}>
              <h1 style={{ fontWeight: 300 }}>Fedistar</h1>
            </div>
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ fontWeight: 200 }}>Multi-column Mastodon and Pleroma client application for desktop</h3>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '620px'
              }}
            >
              <Image src="/basic_timeline.png" alt="Basic screenshot" fill style={{ objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '2rem' }}>
              <Link href="/downloads" rel="noopener noreferrer" style={{ display: 'block', margin: '0 auto' }}>
                <Button size="lg" color="violet" appearance="primary">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon as={BsCloudDownload} style={{ fontSize: '3rem', marginRight: '16px' }} />
                    <div style={{ textAlign: 'left' }}>
                      <p
                        style={{
                          fontSize: '2rem',
                          lineHeight: '3rem',
                          fontWeight: 300
                        }}
                      >
                        Download
                      </p>
                      <p style={{ fontWeight: 200, marginTop: 0 }}>1.0.0 is available</p>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <div style={{ paddingTop: '8rem' }}>
              <FlexboxGrid justify="center">
                <FlexboxGrid.Item>
                  <div
                    style={{
                      position: 'relative',
                      width: '480px',
                      height: '380px'
                    }}
                  >
                    <Image src="/compose.png" alt="Compose" fill style={{ objectFit: 'contain' }} />
                  </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <ul style={{ listStyle: 'none', lineHeight: '42px', fontSize: '1.2rem' }}>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Multiple accounts management
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Multiple columns
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> You can see timelines without sign in
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Desktop notification
                    </li>
                    <li>
                      <Icon as={BsCheck2Circle} style={{ marginRight: 12 }} /> Streaming update
                    </li>
                  </ul>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
          </Content>
          <Footer />
        </Container>
      </main>
    </>
  )
}

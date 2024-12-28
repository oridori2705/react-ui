import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Reviews, { Image } from './Reviews'
import useDialogModal from '../ModalPage/Modal4/useDialogModal'
import Modal from '../ModalPage/Modal4/Modal'
import { ScrollBoxHandle } from '../HorizontalScrollBoxPage/HorizontalScrollBox1/ScrollBoxComponent'
import LazyImageComponent3 from '../LazyImagePage/LazyImage3/LazyComponent3'
import ScrollBox from '../HorizontalScrollBoxPage/HorizontalScrollBox2/ScrollBoxComponent2'
import styled from '@emotion/styled'

export type GalleryProps = {
  galleryKey: string
  images: Image[]
  initialIndex: number
}
export type SetGalleryData = Dispatch<SetStateAction<GalleryProps>>

type Zoom = 'scaleUp' | 'scaleDown'

const initialGalleryProps: GalleryProps = {
  galleryKey: '',
  images: [],
  initialIndex: 0
}

const GalleryPage = () => {
  const [galleryData, setGalleryData] =
    useState<GalleryProps>(initialGalleryProps)
  return (
    <div>
      <h2>Gallery #1</h2>
      <Reviews setGalleryData={setGalleryData} />
      <GalleryModal
        key={galleryData.galleryKey}
        {...galleryData}
        setGalleryData={setGalleryData}
      />
    </div>
  )
}

export default GalleryPage

const GalleryModal = ({
  images,
  initialIndex = 0,
  setGalleryData
}: {
  images: Image[]
  initialIndex: number
  setGalleryData: SetGalleryData
}) => {
  const { modalRef, openModal, closeModal } = useDialogModal()
  const scrollBoxRef = useRef<ScrollBoxHandle>()
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)

  const onClose = () => {
    setGalleryData(initialGalleryProps)
    closeModal()
  }

  const handleItemClick = (item: unknown, index: number) => () => {
    setCurrentIndex(index)
    setZoom(1)
    scrollBoxRef.current!.scrollFocus(index, 'smooth')
  }

  const handleZoom = (zoom: Zoom) => {
    setZoom(prev =>
      Math.min(Math.max(prev + (zoom === 'scaleUp' ? 1 : -1) * 0.25, 0.5), 2)
    )
  }
  const resetZoom = () => setZoom(1)

  useEffect(() => {
    if (images.length) openModal()
  }, [images, openModal])

  const fullSizeImageUrl = images[currentIndex]?.fullsize || ''

  return (
    <Modal
      modalRef={modalRef}
      hide={onClose}
      hideOnClickOutside>
      <ModalContainer>
        <Modal.Header hide={onClose} />
        <Modal.Content>
          <ModalContent>
            <ModalContentMainView>
              <img
                src={fullSizeImageUrl}
                width={600}
                height={320}
                key={fullSizeImageUrl}
                style={{ transform: `scale(${zoom})` }}
              />
              <ZoomButtonContainer>
                <button onClick={() => handleZoom('scaleDown')}>-</button>
                <button onClick={resetZoom}>{Math.round(zoom * 100)}%</button>
                <button onClick={() => handleZoom('scaleUp')}>+</button>
              </ZoomButtonContainer>
            </ModalContentMainView>
            <ScrollBox
              isSetScrollBar={true}
              ref={scrollBoxRef}>
              {images.map((item, index) => (
                <ScrollBox.Wrapper
                  key={item.id}
                  index={index}>
                  <div onClick={handleItemClick(item, index)}>
                    <LazyImageComponent3
                      src={item.thumbnail}
                      width={160}
                      height={80}
                    />
                  </div>
                </ScrollBox.Wrapper>
              ))}
            </ScrollBox>
          </ModalContent>
        </Modal.Content>
      </ModalContainer>
    </Modal>
  )
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`

const ModalContent = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
`

const ModalContentMainView = styled.div`
  position: relative;
  flex-grow: 1;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ZoomButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

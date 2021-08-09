import React, { useEffect, useState } from 'react';
import { SliderItem } from '../../component/ProductItem';
import imgs from '../../assets/image/slider_new.jpg';
import './InfoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import policyApi from '../../api/api';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { fetchUserById } from '../../store/cart';
import { formatMoneyPoint } from '../../utils/common';
function InfoItem(props) {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const [linkImg, setLinkImg] = useState(null);
  const [size, setSize] = useState({
    id: null,
    numSize: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    policyApi
      .getProductItem(slug)
      .then((datas) => {
        setData(datas);
      })
      .finally(() => {
        window.scrollTo({ top: 0 });
      });
  }, [slug]);

  const handleBuy = () => {
    const arrSize = data?.numberSize.slice(1).length;
    if (size.numSize || arrSize === 0) {
      dispatch(
        fetchUserById({
          id: data._id,
          numSize: arrSize ? size.numSize : 0,
          ...data,
        })
      );
    }
  };
  return (
    <div className='Info'>
      <div className='Info_img'>
        <div className='slider_img'>
          <div className='slider'>
            <SliderItem dataImg={data?.listImg} onImg={setLinkImg} />
          </div>
          <div className='innerImg'>
            <InnerImageZoom
              src={linkImg || data?.img}
              zoomSrc={linkImg || data?.img}
            />
          </div>
        </div>
        <div className='Info_comment'>
          <div className='text'>
            <span>{data?.content}</span>
          </div>
          <div className='comment_text'>
            <p>Đánh giá sản phẩm</p>
            <div className='icon_star'>
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
              <FontAwesomeIcon icon={faStar} className='icon_item' />
            </div>
          </div>
          <div className='write_comment'>
            <button>Viết đánh giá</button>
          </div>
        </div>
      </div>
      <div className='content'>
        <p className='title'>{data?.title}</p>
        <p className='ma_sp'>
          <span>Mã sản phẩm:</span> <span>{data?.maSp}</span>
        </p>
        <div className='moeny_span'>
          <span>{formatMoneyPoint(data?.price)} đ</span>
          <span>*Đã bao gồm VAT</span>
        </div>
        <div className='content_color'>
          <span>Màu sắc:</span>
          <span className='img'>
            <img src={imgs} alt='img' />
            <span>{data?.numberSize && data?.numberSize[0]}</span>
          </span>
        </div>
        <div className='content_size'>
          <span>Kích thước:</span>
          <div className='list_size'>
            {data?.numberSize &&
              data?.numberSize.slice(1).map((item, index) => (
                <span
                  className={classNames({ colorSize: size.numSize === item })}
                  key={index}
                  onClick={() =>
                    setSize({
                      numSize: item,
                      id: data._id,
                    })
                  }>
                  {item}
                </span>
              ))}
          </div>
        </div>
        <div className='content_total'>
          <span>Còn sản phẩm:</span>
          <span>
            <b>94</b> sản phẩm
          </span>
        </div>
        <div className='content_link'>
          <button onClick={() => handleBuy()}>MUA NGAY</button>
          <button>🖤 Thêm vào yêu thích</button>
        </div>
        <div className='content_contact'>
          <span>Tư vấn: 0382686620</span>
          <span>
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/zalopay.png?v=1148'
              alt='zalo'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/visa.png?v=1148'
              alt='visa'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/mastercard.png?v=1148'
              alt='master'
            />
            <img
              src='//theme.hstatic.net/1000230642/1000679613/14/cod.png?v=1148'
              alt='money'
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;

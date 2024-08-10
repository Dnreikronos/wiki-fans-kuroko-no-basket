import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function TitlebarImageList() {
  return (
    
    <ImageList  sx={{ width: 1500, height: 700 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" className='items-center text-center bold'>Characters</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcriticalhits.com.br%2Fwp-content%2Fuploads%2F2021%2F05%2Fmaxresdefault-100-910x512.jpg&f=1&nofb=1&ipt=1c01029f40deddfb60631d3d906887de8f3fa87b3988a1e6fada4d7354279f25&ipo=images',
    title: 'Kagami Tsurugi',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F36000000%2FAnime-image-anime-36073270-1024-576.png&f=1&nofb=1&ipt=78be05941dc5a7fb11d4b65aa02c8fa14f7f6bc66f8b8368a97d4594169f25ba&ipo=imagesd',
    title: 'Tetsuya Kuroko',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fec%2F76%2F0a%2Fec760a3c0312eb28869f454c610036e3.jpg&f=1&nofb=1&ipt=a1e0b63706d6a5ea2ee597d02f15c753a734dd106925129c9164968a71a3482d&ipo=images',
    title: 'Daiki Aomine',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6699%2F3ec2a9edaef40f34139ac6956ad26cdf9b81972b_hq.jpg&f=1&nofb=1&ipt=658100a07b43c57b21585454b7d2048893fb6eecf9d1fa76a040983cc219b69c&ipo=images',
    title: 'Atsushi Murasakibara',
    cols: 2,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fba%2F8a%2F67%2Fba8a67d0349bbe11c3367e0ab714804a.jpg&f=1&nofb=1&ipt=8e9af087a417ab33d56ed7e9f98941b69665c67073a5ceae4a6f1f1af31fd84f&ipo=images',
    title: 'Shintarō Midorima',
    cols: 2,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1b%2F03%2Fab%2F1b03ab97f604253aa3b98aac686e9817.jpg&f=1&nofb=1&ipt=a5c5c1e8a12992c28726fc84502799e6423e4fa7c0cb6cf080afc526bfacc914&ipo=images',
    title: 'Seijūrō Akashi',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9712366.jpg&f=1&nofb=1&ipt=8a7d9117b9a9060140f51cfa8936efe90e37e6e71b07763b8532fcb907856f1f&ipo=images',
    title: 'Ryota Kise',
  },
  {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F13%2Fa7%2F9b%2F13a79b4db68e213e561ee844422fefb2.jpg&f=1&nofb=1&ipt=5996ae292eb62793d42cb96678c055f168571675fe08a4659d0e425ec4f68530&ipo=images',
    title: 'Junpei Hyuga',
  },
];
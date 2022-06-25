import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleContent from '../../src/components/Movies/SingleContent';
import { ImgWindow } from '../../src/components/ImgWindow';

function Movies() {
  return (
    <>
      <div >
        <Link href="/movie/documentary/Newtopia">
          newtopia
        </Link>
      </div>
      <div>
        <Link href="/movie/documentary/674882-the-donut-king">
          Donut King
        </Link>
      </div>
      <div>
        <Link href="/movie/documentary/841646-kullankaivajat">
          kultainen maa
        </Link>
      </div>
      <div>
        <Link href="/movie/documentary/437586-mid-90-s">
          mid 90s
        </Link>
      </div>
      <div>
        <Link href="/movie/documentary/gg">
          gg
        </Link>
      </div>
    </>
  )
}

export default Movies
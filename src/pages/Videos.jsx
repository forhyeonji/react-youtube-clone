import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  return <div>비데오 {keyword ? `${keyword}` : '🔥'}</div>;
}

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {useSelector} from 'react-redux';
import FeedList from '../components/FeedComponent';

function Bookmarks() {
    const savedUrls = useSelector((state) => state.root.savedUrls);
    
    return (
      <SafeAreaView>
        <FeedList url={savedUrls} />
      </SafeAreaView>
    );
}

export default Bookmarks;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JournalRoutes from '../journal/routes/JournalRoutes';
import AuthRoutes from '../auth/routes/AuthRoutes'

const AppRouter = () => {
  return (
      <Routes>
        {/* Login y registro */}
        <Route  path='/auth/*' element={ <AuthRoutes /> }/>

        {/* JournalApp */}
        <Route path='/*' element={ <JournalRoutes /> } />

    </Routes>
  );
};

export default AppRouter;
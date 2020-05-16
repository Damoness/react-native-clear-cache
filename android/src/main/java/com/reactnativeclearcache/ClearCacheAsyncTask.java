package com.reactnativeclearcache;

import android.os.AsyncTask;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import java.io.File;


public class ClearCacheAsyncTask extends AsyncTask<Integer,Integer,String> {
  public ClearCacheModule myclearCacheModule = null;
  public Promise promise;
  public ClearCacheAsyncTask(ClearCacheModule clearCacheModule, Promise promise) {
    super();
    this.myclearCacheModule = clearCacheModule;
    this.promise = promise;
  }

  @Override
  protected void onPreExecute() {
    super.onPreExecute();
  }

  @Override
  protected void onPostExecute(String s) {
    super.onPostExecute(s);
    promise.resolve(true);

  }

  @Override
  protected String doInBackground(Integer... params) {
    myclearCacheModule.clearCache();
    return null;
  }


}

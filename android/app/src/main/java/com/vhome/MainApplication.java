package com.vhome;

import android.app.Application;

import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactApplication;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativevietnam.RNNetworkStatePackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.wix.interactable.Interactable;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MapsPackage(),
          new MainReactPackage(),
            new RCTSplashScreenPackage(),
            new VectorIconsPackage(),
            new RNNetworkStatePackage(),
            new ReactMaterialKitPackage(),
            new ReactNativeLocalizationPackage(),
            new RNDeviceInfo(),
            new Interactable()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

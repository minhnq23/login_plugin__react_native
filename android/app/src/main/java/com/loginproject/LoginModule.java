package com.loginproject;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.plugin.login_sdk.LoginInterface;
import com.example.plugin.login_sdk.LoginSdkPlugin;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LoginModule extends ReactContextBaseJavaModule {
    public  static LoginSdkPlugin loginSdk;
    @NonNull
    @Override
    public String getName() {
        return "LoginModule";
    }

    public LoginModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        loginSdk = new LoginSdkPlugin();
    }

    @ReactMethod
    public void  loginMethod(String email, String password, Promise promise) {
       // promise.resolve("haha meme");
        loginSdk.login(email,password);
        loginSdk.setLoginDelegate(new LoginInterface() {
            @Override
            public void onLoginSuccess(String s) {
                promise.resolve(s);
            }

            @Override
            public void onLoginFailure(String s) {
                promise.resolve(s);
            }
        });

    }
}



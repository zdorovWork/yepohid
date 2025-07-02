# React Native базовые правила
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Сохранить специфичные классы для вашего приложения
-keep class com.zapilman.yepohid.** { *; }

# Сохранить классы JavaScript интерфейса
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactProp <methods>;
}
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>;
}

# OkHttp правила
-dontwarn okhttp3.**
-dontwarn okio.**
-dontwarn javax.annotation.**
-keepnames class okhttp3.internal.publicsuffix.PublicSuffixDatabase

# Fresco правила
-keep class com.facebook.fresco.** { *; }
-keep class com.facebook.imagepipeline.** { *; }

# Expo правила
-keep class expo.** { *; }
-keep class versioned.host.exp.exponent.** { *; }

# Сохранить native методы
-keepclasseswithmembernames class * {
    native <methods>;
}

# Общие Android правила
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider

# Сохранить Parcelable
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Удалить логирование в production
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int i(...);
    public static int w(...);
    public static int d(...);
    public static int e(...);
}

# Удалить console.log из JavaScript кода
-assumenosideeffects class * implements org.mozilla.javascript.debug.DebugFrame {
    public void onEnter(org.mozilla.javascript.Context, org.mozilla.javascript.Scriptable, org.mozilla.javascript.Scriptable, java.lang.Object[]);
}

# R8 оптимизации
-optimizations !code/simplification/cast,!field/*,!class/merging/*
-optimizationpasses 5
-allowaccessmodification
-dontpreverify

# Сохранить имена файлов и номера строк для отладки crash reports
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Дополнительные правила для минимизации размера
-dontwarn com.google.common.**
-dontwarn org.apache.**
-dontwarn com.squareup.**
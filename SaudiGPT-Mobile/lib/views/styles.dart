import 'package:flutter/material.dart';

abstract class AppColors {
  static Color primary = const Color(0xFF009FAE);
  static Color secondary = const Color(0xFF424448);
  static Color white = const Color(0xFFFCFCFC);
  static LinearGradient backgroundColor = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [
      Colors.white,
      primary,
    ],
  );
}

ThemeData appTheme() {
  return ThemeData(
    scaffoldBackgroundColor: AppColors.primary,
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.white.withOpacity(0.95),
      elevation: 2,
      iconTheme: IconThemeData(
        color: AppColors.primary,
      ),
      foregroundColor: AppColors.primary,
      titleTextStyle: TextStyle(
        color: AppColors.primary,
        fontSize: 24,
        fontWeight: FontWeight.bold,
        fontFamily: "DINNextLTArabic",
      ),
    ),
    textTheme: const TextTheme(
      titleLarge: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
      titleMedium: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
      titleSmall: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
      bodyLarge: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
      bodyMedium: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
      bodySmall: TextStyle(
        fontFamily: "DINNextLTArabic",
      ),
    ),
  );
}

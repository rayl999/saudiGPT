import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';

class SettingPage extends StatelessWidget {
  const SettingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: AppColors.backgroundColor,
      ),
      child: Center(
        child: Text(
          'Setting Page',
          style: TextStyle(
            color: AppColors.white,
            fontSize: 24,
          ),
        ),
      ),
    );
  }
}

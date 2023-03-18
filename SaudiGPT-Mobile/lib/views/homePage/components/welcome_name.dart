import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';

class WelcomeName extends StatelessWidget {
  const WelcomeName({super.key, required this.name});
  final String name;
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(
          "مرحبا ",
          style: TextStyle(
            color: AppColors.primary,
            fontSize: 42,
          ),
        ),
        Text(
          "راكان",
          style: TextStyle(
            color: AppColors.secondary,
            fontSize: 42,
          ),
        ),
      ],
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CompletionService } from 'src/app/services/completion.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css']
})
export class CompletionComponent implements OnInit {
  prompt: string = '';
  prepend: string = 'Rewrite this message by breaking down the ideas into separate sentences in bullet point format: ';
  completionOutput: any;
  loading: boolean = false;

  constructor(private completionService: CompletionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    let prependedPrompt = this.prepend + this.prompt;
    this.completionService.getCompletion(prependedPrompt).subscribe((res: any) => {
      this.completionOutput = res.choices[0].text.trim();
      this.loading = false;
    })
  }
}
